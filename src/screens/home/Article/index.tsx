import React, { useEffect, useMemo, useState } from "react";
import "./styles.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Alert from "@mui/material/Alert";
import ArticleService from "../../../services/ArticleService";
import { Article } from "../../../libs/types/article";
import { serverApi } from "../../../libs/types/config";
import { useTranslation } from "react-i18next";

type ArticleItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const FallbackImg =
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop";

const formatDate = (iso?: string) =>
  iso
    ? new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(iso))
    : "";

// strip HTML to plain text
const stripHtml = (html?: string) =>
  (html || "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(p|div|li|h\d)>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// WORD-based excerpt with ellipsis
const excerptWords = (txt: string, maxWords = 50) => {
  const words = txt.trim().split(/\s+/);
  return words.length <= maxWords ? txt : words.slice(0, maxWords).join(" ") + "…";
};

// robust image src (absolute or relative)
const resolveImage = (img?: string) => {
  if (!img) return FallbackImg;
  if (/^https?:\/\//i.test(img)) return img;
  return `${serverApi}/${img}`;
};

const ArticleCard = ({ item, readMoreText }: { item: ArticleItem; readMoreText: string }) => (
  <Card className="article-card" elevation={0} id="blog">
    <CardMedia
      component="img"
      image={resolveImage(item.image)}
      alt={item.title}
      className="article-card__image"
      loading="lazy"
      onError={(e) => {
        (e.target as HTMLImageElement).src = FallbackImg;
      }}
    />
    <CardContent className="article-card__body">
      <Typography className="article-card__date">{item.date}</Typography>
      <Typography component="h3" className="article-card__title">
        {item.title}
      </Typography>
      <Typography className="article-card__desc">{item.description}</Typography>
      <Link underline="none" className="article-card__link" href={item.href}>
        {readMoreText} <span className="arrow">→</span>
      </Link>
    </CardContent>
  </Card>
);

const Articles: React.FC = () => {
  const [items, setItems] = useState<ArticleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const { t } = useTranslation();

  const readMoreText = t("common.readMore", "Read more");
  const svc = useMemo(() => new ArticleService(), []);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setErr(null);

        const res: Article[] = await svc.getArticles();

        const mapped: ArticleItem[] = (res || []).map((a: any) => {
          const id = a._id ?? a.id ?? "";
          const title = a.articleTitle ?? a.title ?? "Untitled article";
          const html = a.articleContent ?? a.content ?? "";
          const created = a.createdAt ?? a.updatedAt ?? a.date;
          const image = a.articleImage ?? a.image ?? a.cover ?? FallbackImg;

          return {
            id,
            title,
            date: formatDate(created),
            // 50 words (change to 100 if you want)
            description: excerptWords(stripHtml(html), 50),
            image,
            href: `/articles/${id}`, // adjust to your route
          };
        });

        if (alive) setItems(mapped);
      } catch (e: any) {
        if (alive) setErr(e?.message || "Failed to load articles");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [svc]);

  return (
    <Box component="section" className="articles">
      <Container maxWidth="lg">
        <Typography component="h2" className="articles__heading">
          {t("articles.title")}
        </Typography>
        <Typography className="articles__sub">{t("articles.description")}</Typography>

        {err && (
          <Box mt={2}>
            <Alert severity="error">{err}</Alert>
          </Box>
        )}

        <Grid container spacing={{ xs: 2, md: 4 }} className="articles__grid">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Grid item xs={12} md={4} key={`sk-${i}`}>
                  <Card elevation={0} className="article-card">
                    <Skeleton variant="rectangular" height={180} />
                    <CardContent className="article-card__body">
                      <Skeleton width="40%" />
                      <Skeleton width="80%" />
                      <Skeleton width="60%" />
                      <Skeleton width="30%" />
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : items.length > 0
            ? items.map((item) => (
                <Grid item xs={12} md={4} key={item.id} className="articles__col">
                  <ArticleCard item={item} readMoreText={readMoreText} />
                </Grid>
              ))
            : !err && (
                <Grid item xs={12}>
                  <Typography sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}>
                    No articles yet.
                  </Typography>
                </Grid>
              )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Articles;

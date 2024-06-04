-- CreateTable
CREATE TABLE "Movie" (
    "PosterLink" TEXT NOT NULL,
    "SeriesTitle" TEXT NOT NULL,
    "ReleasedYear" TEXT NOT NULL,
    "Certificate" TEXT NOT NULL,
    "Runtime" TEXT NOT NULL,
    "Genre" TEXT NOT NULL,
    "Rating" DOUBLE PRECISION NOT NULL,
    "Overview" TEXT NOT NULL,
    "MetaScore" INTEGER NOT NULL,
    "Star1" TEXT NOT NULL,
    "Star2" TEXT NOT NULL,
    "Star3" TEXT NOT NULL,
    "Star4" TEXT NOT NULL,
    "Votes" INTEGER NOT NULL,
    "Gross" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("SeriesTitle")
);

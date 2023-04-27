import React from "react";
import { renderWithRouter } from "@tests/testingUtils";
import { screen, cleanup } from "@testing-library/react";
import FeaturedArticle from "./featuredArticle";

const defaultProps = {
    imgSource: "imgSource",
    photoDesc: "photoDesc",
    articleTitle: "artclTitle",
    articleDate: "04/05/1992",
    articleTag: "fashion",
};

const renderComp = () =>
    renderWithRouter(<FeaturedArticle {...defaultProps} />);

describe("<FeaturedArticle />", () => {
    test("should render the article container", () => {
        renderComp();
        expect(screen.getByTestId("featured-article")).toBeInTheDocument();
    });
    test("should render the article image with it's respective description", () => {
        renderComp();
        const articleImage = screen.getByTestId("featured-article-img");
        expect(articleImage).toBeInTheDocument();
        expect(articleImage).toHaveAttribute("src", defaultProps.imgSource);
        expect(articleImage).toHaveAttribute("alt", defaultProps.photoDesc);
    });
    test("should render the article title", () => {
        renderComp();
        expect(screen.getByText(defaultProps.articleTitle)).toBeInTheDocument();
    });
    test("should render the article date", () => {
        renderComp();
        expect(screen.getByText(defaultProps.articleDate)).toBeInTheDocument();
    });
    test("should render the article tag", () => {
        renderComp();
        expect(screen.getByText(defaultProps.articleTag)).toBeInTheDocument();
    });
});

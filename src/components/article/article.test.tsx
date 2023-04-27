import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Article from "./article";

const defaultProps = {
    mainTitle: 'articleTitle'
};

const renderComp = () =>
    render(
        <Article {...defaultProps}>
            <p>I'm an article child</p>
        </Article>
    );

afterEach(cleanup);

describe("<Article />", () => {
    test("should render the title", () => {
        renderComp();
        expect(screen.getByText(defaultProps.mainTitle)).toBeInTheDocument();
    });
    test("should render the children", () => {
        renderComp();
        expect(screen.getByText("I'm an article child")).toBeInTheDocument();
    });
});

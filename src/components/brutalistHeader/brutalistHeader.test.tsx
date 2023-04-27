import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import BrutalistHeader from "./brutalistHeader";

const defaultProps = {
    sectionId: "brutalistHeaderId",
    title: "brutalistHeaderTitle",
};

const renderComp = () =>
    render(
        <BrutalistHeader {...defaultProps}>
            <p>I'm a children p</p>
        </BrutalistHeader>
    );

afterEach(cleanup);

describe("<BrutalistHeader />", () => {
    test("should render brutalist header container", () => {
        renderComp();
        expect(screen.getByTestId("brutalist-header")).toBeInTheDocument();
        expect(screen.getByTestId("brutalist-header")).toHaveAttribute(
            "id",
            defaultProps.sectionId
        );
    });
    test("should render the title", () => {
        renderComp();
        expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    });
    test("should render the children", () => {
        renderComp();
        expect(screen.getByText("I'm a children p")).toBeInTheDocument();
    });
});

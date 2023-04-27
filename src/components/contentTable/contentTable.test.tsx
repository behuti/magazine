import React from "react";
import { renderWithRouter } from "@tests/testingUtils";
import { screen, cleanup, render } from "@testing-library/react";
import ContentTable from "./contentTable";

const defaultProps = {
    sectionId: "contentTableID",
};

const renderComp = () => renderWithRouter(<ContentTable {...defaultProps} />);

afterEach(cleanup);

describe("<ContentTable />", () => {
    test("should render the content table container", () => {
        renderComp();
        expect(screen.getByTestId("content-table")).toBeInTheDocument();
    });

    test("should render the content table title", () => {
        renderComp();
        expect(screen.getByText("Trending on EH")).toBeInTheDocument();
    });
});

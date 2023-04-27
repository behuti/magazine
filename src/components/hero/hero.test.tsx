import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
// import { renderWithRouter } from "@tests/testingUtils";

import Hero from "./hero";

const defaultProps = {
    imgSrc: "heroSrcMock",
    imgDesc: "heroDescMock",
};

const renderComp = () => render(<Hero {...defaultProps} />);

afterEach(cleanup);

describe("<Hero />", () => {
    test("should render hero", () => {
        renderComp();
        expect(screen.getByTestId("hero")).toBeInTheDocument();
    });
});

import React from "react";
import { screen, cleanup  } from "@testing-library/react";
import { renderWithRouter } from "@tests/testingUtils";

import Header from "./header";

const renderComp = () => renderWithRouter(<Header />);

afterEach(cleanup)

describe("<Header />", () => {
    test("should render the logo", () => {
        renderComp();
        expect(screen.getByText("EH.")).toBeInTheDocument();
    });
    test('should have all the sports option', () => {
        renderComp();
        expect(screen.getByText("Sports")).toBeInTheDocument();
    })
    test('should have all the fashion option', () => {
        renderComp();
        expect(screen.getByText("Fashion")).toBeInTheDocument();
    })
    test('should have all the tech option', () => {
        renderComp();
        expect(screen.getByText("Tech")).toBeInTheDocument();
    })
});

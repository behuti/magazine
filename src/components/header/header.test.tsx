import React from "react";
import { screen, cleanup  } from "@testing-library/react";
import { renderWithRouter } from "@tests/testingUtils";

import Header from "./header";

const renderComp = () => renderWithRouter(<Header />);

afterEach(cleanup)

describe("Header.tsx", () => {
    test("should render the logo", () => {
        renderComp();
        expect(screen.getByText("EH.")).toBeInTheDocument();
    });
});

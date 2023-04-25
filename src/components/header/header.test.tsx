import React from "react";
import { render, screen, cleanup  } from "@testing-library/react";
import Header from "./header";

const renderComp = () => render(<Header />);

afterEach(cleanup)

describe("Header.tsx", () => {
    test("should render the logo", () => {
        renderComp();
        expect(screen.getByText("EH.")).toBeInTheDocument();
    });
});

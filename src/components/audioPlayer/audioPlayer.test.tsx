import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import AudioPlayer from "./audioPlayer";

const defaultProps = {
    audioSrc: "audioSrc",
};

const renderComp = () => render(<AudioPlayer {...defaultProps} />);

describe("<AudioPlayer />", () => {
    test("should render audio tag with src", () => {
        renderComp();
        expect(screen.getByTestId("audio-player")).toBeInTheDocument();
        expect(screen.getByTestId("audio-player")).toHaveAttribute(
            "src",
            defaultProps.audioSrc
        );
    });
});

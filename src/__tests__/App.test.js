import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _____`", () => {
    render(<App />)

    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false, 
        level: 1,
    })

    expect(topLevelHeading).toBeInTheDocument()
})

test("displays a profile image and verifies an alt attribute", () => {
    render(<App />)

    const profileImage = screen.getByRole("img", {
        name: /profile picture/i,
    })

    expect(profileImage).toBeInTheDocument()
    expect(profileImage).toHaveAttribute('alt', `Profile Picture of Grey`)
})

test("displays a second-level heading with the text `About Me`", () => {
    render(<App />)

    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2
    })

    expect(secondLevelHeading).toBeInTheDocument()
})

test("displays a paragraph element containing a short biography", () => {
    render(<App />)

    const bioParagraph = screen.getByText(/i'm a coding student/i)

    expect(bioParagraph).toBeInTheDocument()
})

test("displays a link to the authors github", () => {
    render(<App />)

    const githubLink = screen.getByRole("link", {
        name: /github/i,
        exact: false
    })

    expect(githubLink).toBeInTheDocument()
})

test("displays a link to the authors linkedin", () => {
    render(<App />)

    const linkedinLink = screen.getByRole("link", {
        name: /linkedin/i,
        exact: false
    })

    expect(linkedinLink).toBeInTheDocument()
})
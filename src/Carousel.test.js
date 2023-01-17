import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it('renders correctly', () => {
  render(<Carousel/>)
})

it('matches snapshot', () => {
  const {asFragment} = render(<Carousel/>)
  expect(asFragment()).toMatchSnapshot();
})

it('goes back from left arrow', () => {
  const {getByTestId, queryByAltText} = render(<Carousel/>)
  const leftArrow = getByTestId('left-arrow')
  const rightArrow = getByTestId('right-arrow')

  fireEvent.click(rightArrow)
  fireEvent.click(leftArrow)

  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
})

it('goes away when on either end of the images', () => {
  const {getByTestId} = render(<Carousel/>)
  const leftArrow = getByTestId('left-arrow')
  const rightArrow = getByTestId('right-arrow')

  expect(leftArrow).not.toBeVisible()
  expect(rightArrow).toBeVisible()

  fireEvent.click(rightArrow)

  expect(leftArrow).toBeVisible()

  fireEvent.click(rightArrow)

  expect(rightArrow).not.toBeVisible()
})

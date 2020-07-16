// import { render, getByText, fireEvent } from "@testing-library/react";
// import React from "react";
// import Icon from "./icon";

// describe("Icon", () => {
//   test("should display text", () => {
//     const { container } = render(<Icon text="We Salute You!" />);

//     getByText(container, "We Salute You!");
//   })

//   test("should handle click events", () => {
//     const onClickMock = jest.fn();
//     const { container } = render(
//       <Icon text="Click me, maybe?" onClick={onClickMock} />
//     );
//     const component = container.firstChild;

//     fireEvent.click(component);

//     expect(onClickMock).toBeCalled();
//     })

//     test("should make text uppercase", () => {
//         const { container } = render(<Icon text="We Salute You!" />);
//         const component = getByText(container, "We Salute You!");
      
//         //@ts-ignore
//         expect(component).toHaveStyleRule("text-transform", "uppercase");
//       });
// })

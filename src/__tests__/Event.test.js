/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/render-result-naming-convention */


import { render, fireEvent } from "@testing-library/react";
import Event from "../components/Event";
import allEvents from "../mock-data";

const formattedDate = new Date(allEvents[0].created).toUTCString();

describe("<Event /> component", () => {
  
  test("renders event title", () => {
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders event start time", () => {
    const { getByText } = render(<Event event={allEvents[0]} />);
    expect(getByText(formattedDate)).toBeInTheDocument();
  });
  
  test("renders event location", () => {
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    const EventComponent = render(<button>Show Details</button>);
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });

  test("event details section hidden by default", () => {
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(EventComponent.queryByText('Event Details Here')).not.toBeInTheDocument();
  });

  test("hides details section when show details button is clicked", async () => {
    const { getByText, queryByText } = render(<Event event={allEvents[0]} />);
    fireEvent.click(getByText('Show Details'));
    fireEvent.click(getByText('Hide Details'));
    expect(queryByText('A great event to learn JavaScript.')).not.toBeInTheDocument();
  });

  test("shows details section when hide details button is clicked", async () => {
    const EventComponent = render(<Event event={allEvents[0]} />);
    const showDetailsButton = EventComponent.getByText('Show Details');
    fireEvent.click(showDetailsButton);
    const hideDetailsButton = EventComponent.getByText('Hide Details');
    fireEvent.click(hideDetailsButton);
    expect(EventComponent.queryByText('Event Details Here')).not.toBeInTheDocument();
  });

});
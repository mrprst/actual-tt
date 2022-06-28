import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Announce from "../../components/Modelisation/Announce";

describe("when rendered with an announce object", () => {

  const announceExample: any = {
    "id": 1,
    "title": "Architecte",
    "candidacies": [
        {
            "id": 1,
            "announceId": 1,
            "userId": 2,
            "user": {
                "name": "Tom"
            }
        },
        {
            "id": 3,
            "announceId": 1,
            "userId": 3,
            "user": {
                "name": "Mickey"
            }
        },
        {
            "id": 6,
            "announceId": 1,
            "userId": 1,
            "user": {
                "name": "Olive"
            }
        }
    ]
}

  it("should return an announce with users attached", () => {
    render(<Announce announce={announceExample} />);
    expect(
      screen.getByText(/Tom,Mickey,Olive/)
    ).toBeInTheDocument();
  });

});

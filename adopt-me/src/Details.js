import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
// const Details = (props) => {
//   return (
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   );
// };

class Details extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { loading: true };
  // }
  state = { loading: true };

  componentDidMount() {
    // throw new Error("lol");
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.city}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const { animal, breed, location, description, media, name } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

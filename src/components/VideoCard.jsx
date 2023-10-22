import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";

function User({ username }) {
  return (
    <div className="d-flex flex-row justify-content-start align-items-center py-1">
      <img
        src={encodeURI(
          "https://ui-avatars.com/api/?background=random&&name=" +
            username.split(/(?=[A-Z])/).join("+")
        )}
        className="rounded border border-2 border-dark"
        width="25"
        height="25"
        alt={username + "'s avatar"}
      />
      <h4 className="fs-5 mx-2">@{username}</h4>
    </div>
  );
}
User.propTypes = {
  username: PropTypes.string.isRequired,
};
User.defaultProps = {
  username: "DarkLordStrategy",
};

function VideoCard({ title, description, thumbnail, creator, uri }) {
  const navigate = useNavigate();
  return (
    <div
      className="my-2 border border-2 border-dark rounded-4 container-fluid p-3 "
      style={{ maxWidth: "1000px" }}
      onClick={() => {
        navigate("/v/" + uri);
      }}
    >
      <Row noGutters>
        <Col xs="auto" md={6}>
          <img
            alt={title}
            src={thumbnail}
            className="rounded-4 border border-2 border-dark w-100"
            style={{
              aspectRatio: "16/9",
              borderRadius: "10px",
            }}
          />
        </Col>
        <Col className="d-flex flex-column justify-content-between">
          <div className="p-3">
            <h3 className="fs-3">{title}</h3>
            <User
              username={creator}
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            />
            <p
              className="fs-5"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};
VideoCard.defaultProps = {
  title: "Dark Visions: The Elusive Video and the Galaxy's Shrouded Secrets",
  description:
    "In the depths of the galaxy, a situation emerged where the very location of a crucial video remained shrouded in darkness. The video, a key to unraveling a complex plot, was believed to hold the answers I sought. However, as I scoured the vast expanse of the cosmos and consulted my extensive resources, I came to a grim realization.The video's location was invalid, obscured by layers of deception and misdirection. It seemed to defy even the most potent Sith abilities. No matter how deeply I delved into the Force, the trail led only to dead ends and false leads. The elusive recording was concealed within a labyrinthine network of misdirection and secrecy, a puzzle that eluded my relentless pursuit.In this predicament, I was confronted with the bitter truth that the video's hidden location might forever remain beyond my grasp, a testament to the cunning of those who had gone to great lengths to keep its secrets obscured.",
  thumbnail: "https://specializeddental.com/assets/placeholder-image.png",
  creator: "DarkLordStrategy",
  uri: "video-uri",
};
export default VideoCard;
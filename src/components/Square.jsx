import PropTypes from "prop-types"
export default function Square({title,value}) {
  return (
    <>
      <div className="square-container">
        <div className="square">
          <h6>{value}</h6>
        </div>
        <div className="square-title">{title}</div>
      </div>
    </>
  )
};

Square.propTypes = {
  title: PropTypes.node,
  value: PropTypes.node,
}
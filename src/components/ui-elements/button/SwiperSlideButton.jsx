import SimpleButton from "./SimpleButton";

const SwiperSlideButton = ({ active = false, ...rest }) => {
	if (active) {
		rest.color = "bg-green no-wrap";
	} else {
		rest.color = "bg-gray no-wrap";
	}
	return <SimpleButton {...rest} />;
};

export default SwiperSlideButton;

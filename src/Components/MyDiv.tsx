import Container from "./Container";
import CustomHello from "./CustomHello";


const Mydiv = () => {
    const element = (
      <div>
        <h1>Hello guys!!</h1>
        <CustomHello message="EAI?" />
      </div>
    );
    return <Container childElement={element} />;
  };

  export default Mydiv
type Props = {
    message: string;
  };
  
  const CustomHello = (props: Props) => <h1>{props.message}</h1>;
   
export default CustomHello
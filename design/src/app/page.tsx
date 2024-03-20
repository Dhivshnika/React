import { Flex } from "antd";
import Order from '../app/components/Order/order';
import Error from '../app/components/ErrorBox/error';
import BlankBox from '../app/components/BlankBox/blankBox';
export default function Home() {
  return (
    <Flex vertical gap="large" >
      <Order />
      <Error />
      <div style={{ marginTop: "40px", paddingTop: "20px" }}>
        <BlankBox />
      </div>
    </Flex>
  );
}

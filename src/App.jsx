import { Typography } from 'antd';
function App() {

    const {Title} = Typography;

  return (
    <div>
        <Title level={3} type="success">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Title>
          <Text type="warning">The under construction</Text>
          <Text type="secondary">TR : Yapım Aşamasında.</Text>
    </div>
  )
}

export default App

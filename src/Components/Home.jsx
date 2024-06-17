import React from 'react';
import { Center } from '@chakra-ui/react';

class Home extends React.Component {
  render() {
    return (
      <div>
        
        <Center>
        <div style={{ width: '800px', marginBottom: '20px', display:'flex', justifyContent:'center', borderEndEndRadius:'200px', }}>
          <video src="imagem/FILME 2 _ DIVERTIDAMENTE (360p).mp4" controls width="100%" />
        </div>
         <img src="https://www.telavita.com.br/blog/wp-content/uploads/2018/10/divertida-mente.jpg" alt="" />
        </Center>
       <dir>
        <img src="" alt="" />
       </dir>
      </div>
    );
  }
}

export default Home;
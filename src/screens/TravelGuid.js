import {Box, Image, Stack, Text} from 'native-base';
import React from 'react';
import HeaderImage from '../../src/assets/headerImage.png';
import {Button} from 'native-base';

const TravelGuid = () => {
  return (
    <>
      <Box>
        <Stack>
          <Image source={HeaderImage} alt="" />
          <Stack
          space={10}
            minHeight={'400px'}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              fontSize={'36px'}
              style={{
                fontFamily: 'sf pro display',
                fontWeight: 500,
                color: '#17c69b',
              }}>
              Best Places To Travel In December
            </Text>

            <Box borderRadius={10} shadow={7} bgColor={'#fff'} width={'90%'}>
              <Stack px={5} padding={3}>
                <Text
                  fontSize={'12px'}
                  style={{
                    fontWeight: 300,
                    color: '#519548',
                  }}>
                  Booking Available
                </Text>
                <Text
                  fontSize={'36px'}
                  style={{
                    fontWeight: 'bold',
                    color: '#111111',
                  }}>
                  Ocean Breeze
                </Text>
                <Text
                  fontSize={'15px'}
                  style={{
                    fontWeight: 300,
                    color: '#111111',
                  }}>
                  Hawaii
                </Text>
              </Stack>
              <Stack direction={'row'}>
                <Text
                  borderLeftRadius={10}
                  padding={1}
                  fontSize={'36px'}
                  style={{
                    backgroundColor: '#3E1B3C',
                    fontWeight: 'bold',
                    color: '#ffffff',
                  }}>
                  4.8
                </Text>
                <Text
                  padding={1}
                  borderRightRadius={10}
                  width={'85%'}
                  fontSize={'12px'}
                  style={{
                    backgroundColor: '#f54828',
                    fontWeight: 300,
                    color: '#ffffff',
                  }}>
                  512 Reviews
                </Text>
              </Stack>
            </Box>

            <Button
              width={'90%'}
              fontSize={'15px'}
              style={{
                backgroundColor: '#88C425',
                fontWeight: 300,
                color: '#ffffff',
              }}>
              Discover More
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TravelGuid;

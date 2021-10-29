import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Wallpaper from '../assets/images/wall.jpg';

export default function Landing() {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }

        window.addEventListener('resize', handleResize);

        return (_) => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <Container
            id="Home"
            maxWidth={false}
            style={{
                backgroundImage: `url(${Wallpaper})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                maxHeight: '90%',
                minHeight: window.innerWidth < 900 ? '400px' : '600px',
                height:
                    window.innerWidth < 900
                        ? '55vh'
                        : window.innerWidth < 1350
                            ? '60vh'
                            : window.innerWidth < 1650
                                ? '75vh'
                                : '95vh',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgb(0,0,0,0.5)',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                }}
            >
                <div
                    style={{
                        paddingTop: window.innerWidth < 1650 ? '80px' : '16%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'rgb(0,0,0,0.5)',
                            width: '80%',
                            padding: '50px 0',
                            borderRadius: '20px',
                            minWidth: '350px',
                            borderTop: '1px solid #87c9ff',
                            borderBottom: '1px solid #87c9ff',
                        }}
                    >
                        <Typography
                            variant="h1"
                            style={{
                                borderRadius: '5px',
                                borderBottom: '4px groove #87c9ff',
                                borderTop: '4px groove #87c9ff',
                                marginBottom: '1%',
                                color: '#e8e6e4',
                                fontSize:
                                    window.innerWidth < 450
                                        ? '1.75rem'
                                        : window.innerWidth < 900
                                            ? '2rem'
                                            : window.innerWidth < 1350
                                                ? '4rem'
                                                : '6rem',
                            }}
                        >
                            In Search of the Best Pizza
                        </Typography>
                        <Typography
                            variant="h6"
                            style={{
                                width:
                                    window.innerWidth < 900
                                        ? '75%'
                                        : window.innerWidth < 1650
                                            ? '60%'
                                            : '40%',
                                margin: '0.5%',
                                color: '#e8e6e4',
                                fontWeight: 'lighter',
                                fontSize:
                                    window.innerWidth < 900
                                        ? '1rem'
                                        : '1.25rem',
                            }}
                        >
                            This website is a collection of different pizzas and
                            their ratings, with the goal of, one day, find the
                            perfect pizza... Take a look at the data!
                        </Typography>
                        <Button
                            style={{
                                padding: '0.5% 1%',
                                backgroundColor: 'rgb(0,0,0,0.5)',
                                border: '3px solid #87c9ff',
                                borderRadius: '5px',
                                color: '#87c9ff',
                                margin: '0.5%',
                                width: '15%',
                                minWidth: '160px',
                            }}
                        >
                            check them out
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import "react-loading-skeleton/dist/skeleton.css";
import { Container, Footer, ImageContainer, SkeletonProductContainer } from './skeleton-products.style';

const SkeletonProducts = ({category}) => {
    return (
        <div style={{ width: '100%', margin: '2rem 0' }}>
            <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                {category && <div style={{ margin: '0 0.5rem', marginBottom: '1.5rem' }}>
                    <Skeleton height={30} width="100%" />
                </div>}
                <Container>
                    {[...Array(4)].map((_,i) =>
                        <SkeletonProductContainer key={i}>
                            <ImageContainer>
                                <Skeleton
                                    height="100%"
                                    width="100%"
                                />
                            </ImageContainer>

                            <Footer>

                                <Skeleton
                                    width={100}
                                />

                                <Skeleton
                                    width={100}
                                />

                            </Footer>
                        </SkeletonProductContainer>
                    )}
                </Container>
            </SkeletonTheme>
        </div>
    )
}

export default SkeletonProducts
/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

import gallery1 from 'assets/images/gallery/1.png';
import gallery2 from 'assets/images/gallery/2.png';
import gallery3 from 'assets/images/gallery/3.png';
import gallery4 from 'assets/images/gallery/4.png';
import gallery5 from 'assets/images/gallery/5.png';
import gallery6 from 'assets/images/gallery/6.png';

const data = [
  {
    id: 1,
    image: gallery1,
    title: '',
  },
  {
    id: 2,
    image: gallery2,
    title: '',
  },
  {
    id: 3,
    image: gallery3,
    title: '',
  },
  {
    id: 4,
    image: gallery4,
    title: '',
  },
  {
    id: 6,
    image: gallery6,
    title: '',
  },
  {
    id: 5,
    image: gallery5,
    title: '',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Work the way you love"
          title="Make your environment yours. See how we helped some of our clients transform their workplace. Share your's today"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        <Button variant="muted" sx={styles.button}>
          Discover more <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
    textAlign: 'center',
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
    textAlign: 'left',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: 'auto',
    margin: 'auto',
    backgroundColor: 'transparent',
    borderBottom: '2px solid transparent',
    borderRadius: '0',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      backgroundColor: 'transparent',
      color: 'primary',
      borderBottom: '2px solid #8D448B',
      borderRadius: '0',
      svg: {
        fill: 'primary',
        ml: '5px',
      },
    },
  },
};

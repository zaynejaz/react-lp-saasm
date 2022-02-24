/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { RiArrowRightSLine } from 'react-icons/ri';

import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-card';

import thumb1 from 'assets/images/blog/1.png';
import thumb2 from 'assets/images/blog/2.png';
import thumb3 from 'assets/images/blog/3.png';

const data = [
  {
    id: 1,
    thumb: thumb1,
    commentCount: 10,
    link: '#!',
    title: `How to craft return-to-office plans that emphasize compassion`,
  },
  {
    id: 2,
    thumb: thumb2,
    commentCount: 29,
    link: '#!',
    title: `How to transform your standard office into a customized space`,
  },
  {
    id: 3,
    thumb: thumb3,
    commentCount: 22,
    link: '#!',
    title: `Four workplace trends that\'ll defined you`,
  },
  {
    id: 4,
    thumb: thumb2,
    commentCount: 23,
    link: '#!',
    title: `Mixing beaux arts and modernism in a landmark building`,
  },
  {
    id: 5,
    thumb: thumb3,
    commentCount: 7,
    link: '#!',
    title: `The businesses innovating and giving back as part of their USP`,
  },
  {
    id: 6,
    thumb: thumb1,
    commentCount: 8,
    link: '#!',
    title: `If now isn't the time to start a new business, when is?`,
  },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      className={className}
      sx={styles.paginationButton}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: 'unslick',
    },
  ],
};

const Blog = () => {
  return (
    <Box id="blog" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Ideas by Saasm"
          title="Workplace trends and insights"
        />
        <Slider sx={styles.blogWrapper} {...settings}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Slider>
        <Button variant="muted" sx={styles.button}>
          Read more <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [30, 30, 6],
    pb: [50, 50, 50, 100, 8, 9],
    textAlign: 'center',
  },
  heading: {
    mb: [30, 30, 30, 50, 60],
  },
  blogWrapper: {
    gap: 30,
    display: ['grid', 'grid', 'grid', 'block', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    m: [0, 0, 0, '0 -15px', 0],
    textAlign: 'left',
  },
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s',
    },
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)',
      },
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)',
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)',
    },
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: 'auto',
    margin: '3.5rem auto 0',
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

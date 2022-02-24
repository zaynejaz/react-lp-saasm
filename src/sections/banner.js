/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button } from 'theme-ui';
import { rgba } from 'polished';

import Select from 'components/select';
import bannerBg from 'assets/images/banner-bg.jpg';
import mapMarker from 'assets/images/icons/map-marker.png';

const options = [
  {
    id: 1,
    label: 'Atlanta',
    value: 'atlanta--GA',
  },
  {
    id: 2,
    label: 'Austin',
    value: 'austin--TX',
  },
  {
    id: 3,
    label: 'Bethesda',
    value: 'bethesda--MD',
  },
  {
    id: 4,
    label: 'Boston',
    value: 'boston--MA',
  },
  {
    id: 5,
    label: 'Boulder',
    value: 'boulder',
  },
  {
    id: 6,
    label: 'Charlotte',
    value: 'charlotte',
  },
  {
    id: 7,
    label: 'Chicago',
    value: 'chicago--IL',
  },
  {
    id: 8,
    label: 'College Park, MD',
    value: 'college-park-md--MD',
  },
  {
    id: 9,
    label: 'Columbus',
    value: 'columbus',
  },
  {
    id: 10,
    label: 'Dallas - Fort Worth',
    value: 'dallas-fort-worth--TX',
  },
  {
    id: 11,
    label: 'Denver',
    value: 'denver--CO',
  },
  {
    id: 12,
    label: 'Detroit',
    value: 'detroit--MI',
  },
  {
    id: 13,
    label: 'Greenwich, CT',
    value: 'greenwich-ct',
  },
  {
    id: 14,
    label: 'Houston',
    value: 'houston--TX',
  },
  {
    id: 15,
    label: 'Kansas City',
    value: 'kansas-city',
  },
  {
    id: 16,
    label: 'Las Vegas',
    value: 'las-vegas',
  },
  {
    id: 17,
    label: 'Los Angeles',
    value: 'los-angeles--CA',
  },
  {
    id: 18,
    label: 'Miami',
    value: 'miami--FL',
  },
  {
    id: 19,
    label: 'Minneapolis',
    value: 'minneapolis',
  },
  {
    id: 20,
    label: 'Nashville',
    value: 'nashville',
  },
  {
    id: 21,
    label: 'New York City',
    value: 'new-york-city--NY',
  },
  {
    id: 22,
    label: 'Orange County',
    value: 'orange-county--CA',
  },
  {
    id: 23,
    label: 'Philadelphia',
    value: 'philadelphia--PA',
  },
  {
    id: 24,
    label: 'Phoenix',
    value: 'phoenix',
  },
  {
    id: 25,
    label: 'Portland',
    value: 'portland--OR',
  },
  {
    id: 26,
    label: 'Raleigh-Durham',
    value: 'raleigh-durham--NC',
  },
  {
    id: 27,
    label: 'Sacramento',
    value: 'sacramento--CA',
  },
  {
    id: 28,
    label: 'Salt Lake City',
    value: 'salt-lake-city',
  },
  {
    id: 29,
    label: 'San Diego',
    value: 'san-diego--CA',
  },
  {
    id: 30,
    label: 'Seattle',
    value: 'seattle--WA',
  },
  {
    id: 31,
    label: 'SF Bay Area',
    value: 'sf-bay-area--CA',
  },
  {
    id: 33,
    label: 'St. Louis',
    value: 'st-louis',
  },
  {
    id: 34,
    label: 'Tampa',
    value: 'tampa--FL',
  },
  {
    id: 35,
    label: 'Washington, D.C.',
    value: 'washington-DC',
  },
];

export default function Banner() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting...');
  };

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1" sx={styles.heroTitle}>
              Find your flexible workspace 
            </Heading>
            <Text as="p" sx={styles.desc}>
              Whether you’re an established enterprise or a growing startup, discover flexible spaces and solutions to move your business forward. 
            </Text>
            <Box as="form" onSubmit={handleSubmit}>
              <Select
                id="location"
                label="Find Workplace In"
                defaultValue={options[1].label}
                sx={styles.select}
                icon={mapMarker}
              >
                {options?.map((option) => (
                  <option value={option.value} key={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <Button type="submit" sx={styles.button} variant="primary">
                Start
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    backgroundColor: rgba('#fff', 0.93),
    boxShadow: [
      '0px 10px 16px rgba(52, 61, 72, 0.12)',
      null,
      null,
      null,
      'none',
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 65px',
    },
  },
  heroTitle: {
    fontSize: [22, 28, 28, 40, , 5, 6],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 40,
    },
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 15,
    },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ['auto', 'auto', 'initial'],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};



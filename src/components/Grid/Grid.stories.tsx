import React from 'react';
import Grid from './Grid';

export default {
  title: 'Grid',
};

const styles = {
  box: {
    background: '#F6F9FC',
    border: '1px solid #ccc',
    padding: '1em',
  },
  header: {
    marginTop: 0,
  },
};

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem dignissimos, voluptate, dicta saepe maiores hic omnis sit porro optio nostrum vero ipsum adipisci quod non quasi excepturi, beatae exercitationem?';

export const DefaultGrid = () => {
  const boxes = [
    { title: 'Box 1' },
    { title: 'Box 2' },
    { title: 'Box 3' },
    { title: 'Box 4' },
    { title: 'Box 5' },
    { title: 'Box 6' },
    { title: 'Box 7' },
    { title: 'Box 8' },
  ];

  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gridTemplateRows="none">
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Grid.Item>
      ))}
    </Grid>
  );
};

export const GridColumnGap = () => {
  const boxes = [
    { title: 'Box 1' },
    { title: 'Box 2' },
    { title: 'Box 3' },
    { title: 'Box 4' },
    { title: 'Box 5' },
    { title: 'Box 6' },
    { title: 'Box 7' },
    { title: 'Box 8' },
  ];

  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gridColumnGap="1em" gridTemplateRows="none">
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Grid.Item>
      ))}
    </Grid>
  );
};

export const GridRowGap = () => {
  const boxes = [
    { title: 'Box 1' },
    { title: 'Box 2' },
    { title: 'Box 3' },
    { title: 'Box 4' },
    { title: 'Box 5' },
    { title: 'Box 6' },
    { title: 'Box 7' },
    { title: 'Box 8' },
  ];

  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gridRowGap="1em" gridTemplateRows="none">
      {boxes.map(({ title }) => (
        <div style={{ ...styles.box }}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </div>
      ))}
    </Grid>
  );
};
export const GridGap = () => {
  const boxes = [
    { title: 'Box 1' },
    { title: 'Box 2' },
    { title: 'Box 3' },
    { title: 'Box 4' },
    { title: 'Box 5' },
    { title: 'Box 6' },
    { title: 'Box 7' },
    { title: 'Box 8' },
  ];

  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gap="1em" gridTemplateRows="none">
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Grid.Item>
      ))}
    </Grid>
  );
};
export const Nested = () => {
  const boxes = [{ title: 'Box 1' }, { title: 'Box 2' }, { title: 'Box 3' }];

  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="none">
      {boxes.map(() => (
        <Grid.Item style={{ ...styles.box }}>
          <Grid gridTemplateColumns="repeat(3, 1fr)">
            {boxes.map(({ title }) => (
              <Grid.Item style={{ ...styles.box }}>
                <h3 style={styles.header}>{title}</h3>
                Text
              </Grid.Item>
            ))}
          </Grid>
        </Grid.Item>
      ))}
    </Grid>
  );
};

export const Custom = (args) => {
  const boxes = [
    { title: 'Box 1' },
    { title: 'Box 2' },
    { title: 'Box 3' },
    { title: 'Box 4' },
    { title: 'Box 5' },
    { title: 'Box 6' },
    { title: 'Box 7' },
    { title: 'Box 8' },
  ];

  return (
    <Grid {...args} gridTemplateRows="none">
      {boxes.map(({ title }) => (
        <Grid.Item style={{ ...styles.box }}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Grid.Item>
      ))}
    </Grid>
  );
};

Custom.args = {
  width: '100%',
  lineHeight: 'initial',
  height: 'auto',
  gridTemplateRows: '100%',
  gridTemplateColumns: '100%',
  gap: 0,
  gridRowGap: 0,
  gridColumnGap: 0,
  justifyItems: 'center',
  alignItems: 'center',
  justifyCcontent: 'start',
  aligncContent: 'start',
  position: 'relative',
  background: 'initial',
  color: 'inherit',
  zIndex: 'auto',
  userSelect: 'auto',
};

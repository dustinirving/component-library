import React from 'react';
import Flex from './Flex';

export default {
  title: 'Flex',
  component: Flex,
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

export const Default = () => {
  const boxes = ['Box 1', 'Box 2', 'Box 3'];
  return (
    <Flex>
      {boxes.map((box) => (
        <Flex.Item style={styles.box}>
          <h3 style={styles.header}>{box}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const FlexNumber = () => {
  const boxes = [
    { title: 'Box 1', flex: 1 },
    { title: 'Box 2', flex: 2 },
    { title: 'Box 3', flex: 3 },
  ];
  return (
    <Flex alignItems="stretch">
      {boxes.map(({ title, flex }) => (
        <Flex.Item flex={flex} style={styles.box}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const FlexWrap = () => {
  const boxes = ['Box 1', 'Box 2', 'Box 3', 'Box 4', 'Box 5', 'Box 6'];

  return (
    <Flex flexWrap="wrap">
      {boxes.map((box) => (
        <Flex.Item flexBasis="300px" style={styles.box}>
          <h3 style={styles.header}>{box}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const Order = () => {
  const boxes = [
    { title: 'Box 1', order: 3 },
    { title: 'Box 2', order: 1 },
    { title: 'Box 3', order: 2 },
  ];

  return (
    <Flex>
      {boxes.map(({ title, order }) => (
        <Flex.Item flex={1} order={order} style={styles.box}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const alignItemsCenter = () => {
  const boxes = [
    {
      title: 'Box 1',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente voluptatibus minus, accusantium repellat nam saepe alias reiciendis repellendus quasi officiis assumenda necessitatibus repudiandae quaerat blanditiis itaque, doloremque eum laborum temporibus?',
    },
    {
      title: 'Box 2',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempora sed! Esse quidem facilis ullam similique nemo dolorum excepturi tenetur officiis. Nam totam officia',
    },
    {
      title: 'Box 3',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta exercitationem ad eos? Cumque quia odit tempore temporibus laboriosam vero vel impedit nobis minima et! Dolores culpa veniam libero reiciendis! Ipsa.',
    },
  ];

  return (
    <Flex alignItems="center">
      {boxes.map(({ title, text }) => (
        <Flex.Item flex={1} alignSelf="auto" style={styles.box}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};
export const AlignItemsEnd = () => {
  const boxes = [
    {
      title: 'Box 1',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente voluptatibus minus, accusantium repellat nam saepe alias reiciendis repellendus quasi officiis assumenda necessitatibus repudiandae quaerat blanditiis itaque, doloremque eum laborum temporibus?',
    },
    {
      title: 'Box 2',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempora sed! Esse quidem facilis ullam similique nemo dolorum excepturi tenetur officiis. Nam totam officia',
    },
    {
      title: 'Box 3',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta exercitationem ad eos? Cumque quia odit tempore temporibus laboriosam vero vel impedit nobis minima et! Dolores culpa veniam libero reiciendis! Ipsa.',
    },
  ];

  return (
    <Flex alignItems="flex-end">
      {boxes.map(({ title, text }) => (
        <Flex.Item flex={1} alignSelf="auto" style={styles.box}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const FlexDirectionColumns = () => {
  const boxes = [
    {
      title: 'Box 1',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente voluptatibus minus, accusantium repellat nam saepe alias reiciendis repellendus quasi officiis assumenda necessitatibus repudiandae quaerat blanditiis itaque, doloremque eum laborum temporibus?',
    },
    {
      title: 'Box 2',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempora sed! Esse quidem facilis ullam similique nemo dolorum excepturi tenetur officiis. Nam totam officia',
    },
    {
      title: 'Box 3',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta exercitationem ad eos? Cumque quia odit tempore temporibus laboriosam vero vel impedit nobis minima et! Dolores culpa veniam libero reiciendis! Ipsa.',
    },
  ];

  return (
    <Flex flexDirection="column">
      {boxes.map(({ title, text }) => (
        <Flex.Item flex={1} style={styles.box}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const JustifyContentFlexEnd = () => {
  const boxes = [{ title: 'Box 1' }, { title: 'Box 2' }, { title: 'Box 3' }];

  return (
    <Flex justifyContent="flex-end">
      {boxes.map(({ title }) => (
        <Flex.Item flexBasis="20%" style={styles.box}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const JustifyContentCenter = () => {
  const boxes = [{ title: 'Box 1' }, { title: 'Box 2' }, { title: 'Box 3' }];

  return (
    <Flex justifyContent="center">
      {boxes.map(({ title }) => (
        <Flex.Item flexBasis="20%" style={styles.box}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const JustifyContentSpaceBetween = () => {
  const boxes = [{ title: 'Box 1' }, { title: 'Box 2' }, { title: 'Box 3' }];

  return (
    <Flex justifyContent="space-between">
      {boxes.map(({ title }) => (
        <Flex.Item flexBasis="20%" style={styles.box}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const JustifyContentSpaceAround = () => {
  const boxes = [{ title: 'Box 1' }, { title: 'Box 2' }, { title: 'Box 3' }];

  return (
    <Flex justifyContent="space-around">
      {boxes.map(({ title }) => (
        <Flex.Item flexBasis="20%" style={styles.box}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const JustifyContentSpaceEvenly = () => {
  const boxes = [{ title: 'Box 1' }, { title: 'Box 2' }, { title: 'Box 3' }];

  return (
    <Flex justifyContent="space-evenly">
      {boxes.map(({ title }) => (
        <Flex.Item flexBasis="20%" style={styles.box}>
          <h3 style={styles.header}>{title}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

export const AlignSelf = () => {
  return (
    <Flex>
      <Flex.Item alignSelf="flex-start" flex={1} style={styles.box}>
        <h3 style={styles.header}>Box 1</h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eius non molestias nostrum
        facere est neque ab? Maxime velit, quia exercitationem et sunt aliquam amet, perferendis
        corporis ut, nemo dignissimos.
      </Flex.Item>
      <Flex.Item alignSelf="center" flex={1} style={styles.box}>
        <h3 style={styles.header}>Box 2</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Flex.Item>
      <Flex.Item alignSelf="flex-end" flex={1} style={styles.box}>
        <h3 style={styles.header}>Box 3</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Flex.Item>
    </Flex>
  );
};

export const Custom = (args) => {
  const boxes = ['Box 1', 'Box 2', 'Box 3'];
  return (
    <Flex {...args}>
      {boxes.map((box) => (
        <Flex.Item style={styles.box}>
          <h3 style={styles.header}>{box}</h3>
          {text}
        </Flex.Item>
      ))}
    </Flex>
  );
};

Custom.args = {
  justifyContent: 'flex-start',
  alignItems: 'center',
  alignSelf: 'auto',
  flexDirection: 'row',
  flexWrap: 'inherit',
  height: 'auto',
  position: 'relative',
  width: '100%',
  zIndex: 'auto',
};

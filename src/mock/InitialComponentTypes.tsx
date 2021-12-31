import { v4 as uuidv4 } from 'uuid';
import ComponentTypeType from "../types/ComponentTypeType";
import ComponentType from "../types/ComponentType";

const componentTypes = [
  {
    title: "Keycaps",
    components: [
      { title: "Caps 1", price: 40 },
      { title: "Caps 2", price: 60 },
      { title: "Caps 3", price: 55 }
    ]
  },
  {
    title: "Switches",
    components: [
      { title: "Gat yellows", price: 18.00 },
      { title: "Ink blacks", price: 76.50 },
      { title: "Tangerines", price: 65.00 }
    ]
  }
];

const initialComponentTypes = componentTypes.reduce((acc: Record<string, ComponentTypeType>, { title, components }) => {
  const componentTypeId = uuidv4();

  if (!acc[componentTypeId]) {
    const componentTypeComponents = components.reduce((acc: Record<string, ComponentType>, { title, price }) => {
      const componentId = uuidv4();

      if (!acc[componentTypeId]) {
        acc[componentId] = { title: title, price: price };
      }

      return acc;
    }, {});

    acc[componentTypeId] = { title: title, components: componentTypeComponents };
  }

  return acc;
}, {});

export default initialComponentTypes;

// const componentTypes: Record<string, ComponentTypeType> = {
//   "1": {
//     title: "Keycaps",
//     components: {
//       "1": { title: "Caps 1", price: 40 },
//       "2": { title: "Caps 2", price: 60 },
//       "3": { title: "Caps 3", price: 55 }
//     }
//   },
//   "2": {
//     title: "Switches",
//     components: {
//       "1": { title: "Gat yellows", price: 18.00 },
//       "2": { title: "Ink blacks", price: 76.50 },
//       "3": { title: "Tangerines", price: 65.00 }
//     }
//   }
// };
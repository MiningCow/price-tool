import ComponentGroupType from "../types/ComponentGroupType";

const componentGroups: Record<string, ComponentGroupType> = {
  "208f3da2-6260-46c2-acb6-cc567d91789e": {
    id: "208f3da2-6260-46c2-acb6-cc567d91789e",
    title: "Keycaps",
    components: {
      "6a01f8eb-180e-49a4-b128-a4fcb52aedde": { id: "6a01f8eb-180e-49a4-b128-a4fcb52aedde", title: "Caps 1", price: 40 },
      "b0510bde-32e7-4e7e-a2a6-4e7edc9d2b03": { id: "b0510bde-32e7-4e7e-a2a6-4e7edc9d2b03", title: "Caps 2", price: 60, url: "http://miningcow.net" },
      "94a91a07-6c3b-406b-8bbe-5a4d3bfff91c": { id: "94a91a07-6c3b-406b-8bbe-5a4d3bfff91c", title: "Caps 3", price: 55 }
    }
  },
  "ab5ff31d-ddc8-4d85-8f00-c6d9ea04c3f5": {
    id: "ab5ff31d-ddc8-4d85-8f00-c6d9ea04c3f5",
    title: "Switches",
    components: {
      "64357a48-a6cb-41b8-b4cf-99a1b183a50e": { id: "64357a48-a6cb-41b8-b4cf-99a1b183a50e", title: "Gat yellows", price: 18.00 },
      "01fe6779-1254-4bf6-9e4d-2f85b67d2936": { id: "01fe6779-1254-4bf6-9e4d-2f85b67d2936", title: "Ink blacks", price: 76.50 },
      "0073c983-488d-4473-b34c-bbac439ce31a": { id: "0073c983-488d-4473-b34c-bbac439ce31a", title: "Tangerines", price: 65.00 }
    }
  }
};

export default componentGroups;


// const input = "new";
// componentTypes[input] = {title: "", components: []}

// const initialComponentTypes = componentTypes.reduce((acc: Record<string, ComponentTypeType>, { title, components }) => {
//   const componentTypeId = uuidv4();

//   if (!acc[componentTypeId]) {
//     const componentTypeComponents = components.reduce((acc: Record<string, ComponentType>, { title, price }) => {
//       const componentId = uuidv4();

//       if (!acc[componentTypeId]) {
//         acc[componentId] = { title: title, price: price };
//       }

//       return acc;
//     }, {});

//     acc[componentTypeId] = { title: title, components: componentTypeComponents };
//   }

//   return acc;
// }, {});

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
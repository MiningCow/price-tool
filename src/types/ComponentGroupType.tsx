import ComponentType from "./ComponentType";

export default interface ComponentGroupType {
    id: string;
    title: string;
    components: Record<string, ComponentType>;
}

import { HStack, VStack } from "nixix/view-components";

type SectionProps = Nixix.HTMLAttributes<HTMLElement> & {
  flex?: boolean;
}

const Bordered = ({flex, children, className: c, ...rest}: SectionProps): someView => {
  const props: SectionProps = {
    ...rest,
    className: `font-Jakarta_Sans font-semibold rounded-xl bg-white p-4 pb-5 border border-border_1 ` + c
  };
  switch (flex) {
    case true: 
      return (
        <HStack {...props} >{children}</HStack>
      )
    default:
      return (
        <VStack {...props}>{children}</VStack>
      )
  }
}

const Section = ({flex, children, className: c, ...rest}: SectionProps): someView => {
  const props: SectionProps = {
    ...rest,
    className: `font-Jakarta_Sans font-semibold rounded-xl bg-white p-4 pb-5 ` + c
  };
  switch (flex) {
    case true: 
      return (
        <HStack {...props} >{children}</HStack>
      )
    default:
      return (
        <VStack {...props}>{children}</VStack>
      )
  }
}

export default Object.assign(Section, {
  Bordered
});
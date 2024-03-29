import { concat } from "nixix/primitives";
import { HStack, VStack } from "nixix/view-components";

type SectionProps = Nixix.HTMLAttributes<HTMLElement> & {
  flex?: boolean;
}

const Bordered = ({flex, children, className: c, ...rest}: SectionProps): someView => {
  const props: SectionProps = {
    ...rest,
    className: concat`font-Jakarta_Sans font-semibold rounded-xl bg-white border border-border_1  ${c}` 
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
    className: concat`font-Jakarta_Sans font-semibold rounded-xl bg-white ${c} `
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
import tw from 'tailwind-styled-components';

export const AllContainer = tw.div`
flex
flex-col
mb-10
max-w-[800px]
p-5
`

export const TitleContainer = tw.div`
flex
flex-col
bg-white
border-solid
border-[1px]
p-5
my-5
`

export const DisableContainer = tw(TitleContainer)`
${
  (props: { isEnabled?: boolean }) =>
    props.isEnabled
      ? "opacity-100"
      : "opacity-30 pointer-events-none"
}
`

export const InputBox = tw.input`
border-solid
border-[1px]
mt-1
p-2
`

export const AskTag = tw.div`
inline-flex
items-center
py-1
px-1.5
bg-[#E1ECF4]
hover:bg-[#D0E3F1]
text-[#39739D]
`;

export const SuggestionTagBox = tw.div`
absolute
bg-white
border-solid
border-[1px]
rounded-lg
w-[720px]
p-2
`
export const AnswerTagName = tw.p`
py-1
px-1.5
bg-[#E1ECF4]
text-[#39739D]
h-6
`;

export const SuggestionTagItem = tw.div`
flex
flex-col
items-start
p-1
w-[230px]
h-max-[100px]
mb-3
hover:bg-gray-nav-active
`
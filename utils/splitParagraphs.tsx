import { P } from '@/Atoms/Typography'

export default function splitParagraphs(paragraphs: string) {
  return paragraphs.split(/\n{1,}/).map((paragraph, index) => <P key={index}>{paragraph}</P>)
}

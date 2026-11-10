import styled from '@emotion/styled';
import booksIcon from '../assets/books.png';
import checkIcon from '../assets/check.png';
import bookOpenIcon from '../assets/book-open.png';
import bookmarkIcon from '../assets/bookmark.png';
import type { Book } from '../types/book';

interface StatsProps {
  books: Book[];
}

const StatsSection = styled.section`
  margin: 24px 0;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const StatsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const StatCard = styled.div`
  flex: 1;
`;

const Label = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #969696;
`;

const Value = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 750;
  color: #deb557;
`;

export const Stats = ({ books }: StatsProps) => {
  const total = books.length;
  const done = books.filter((b) => b.status === 'done').length;
  const reading = books.filter((b) => b.status === 'reading').length;
  const want = books.filter((b) => b.status === 'want').length;

  return (
    <StatsSection>
      <StatsWrapper>
        <StatCard>
          <LabelRow>
            <Icon src={booksIcon} alt="" aria-hidden="true" />
            <Label>Всего</Label>
          </LabelRow>
          <Value>{total}</Value>
        </StatCard>
        <StatCard>
          <LabelRow>
            <Icon src={checkIcon} alt="" aria-hidden="true" />
            <Label>Прочитано</Label>
          </LabelRow>
          <Value>{done}</Value>
        </StatCard>
        <StatCard>
          <LabelRow>
            <Icon src={bookOpenIcon} alt="" aria-hidden="true" />
            <Label>Читаю</Label>
          </LabelRow>
          <Value>{reading}</Value>
        </StatCard>
        <StatCard>
          <LabelRow>
            <Icon src={bookmarkIcon} alt="" aria-hidden="true" />
            <Label>Хочу прочитать</Label>
          </LabelRow>
          <Value>{want}</Value>
        </StatCard>
      </StatsWrapper>
    </StatsSection>
  );
};


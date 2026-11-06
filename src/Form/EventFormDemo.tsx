import { useState } from 'react';
import styled from '@emotion/styled';

type Format = 'online' | 'offline';

const FormContainer = styled.section`
  background: #222;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #555;
  max-width: 400px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  margin: 0 0 8px;
  color: #e8e8e8;
  text-align: center;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.9rem;
  color: #aaa;
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  background: #2a2a2a;
  border: 1px solid #555;
  border-radius: 4px;
  color: #e8e8e8;
  font-family: inherit;
  &:focus { outline: 1px solid #deb557; }
`;

const StyledSelect = styled.select`
  padding: 8px 12px;
  background: #2a2a2a;
  border: 1px solid #555;
  border-radius: 4px;
  color: #e8e8e8;
  font-family: inherit;
  &:focus { outline: 1px solid #deb557; }
`;

const StyledTextarea = styled.textarea`
  padding: 8px 12px;
  background: #2a2a2a;
  border: 1px solid #555;
  border-radius: 4px;
  color: #e8e8e8;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  &:focus { outline: 1px solid #deb557; }
`;

const ValuesBox = styled.div`
  padding: 12px;
  border: 1px dashed #555;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #e8e8e8;
`;

const ValuesTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 0.9rem;
  color: #deb557;
`;

export function EventFormDemo() {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [format, setFormat] = useState<Format>('online');
  const [participants, setParticipants] = useState<number>(10);
  const [description, setDescription] = useState<string>('');

  return (
    <FormContainer>
      <Title>Новое мероприятие</Title>

      <Field>
        Название:
        <StyledInput
          value={title ?? ''}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Field>

      <Field>
        Формат:
        <StyledSelect
          value={format}
          onChange={(e) => setFormat(e.target.value as Format)}
        >
          <option value="online">Онлайн</option>
          <option value="offline">Офлайн</option>
        </StyledSelect>
      </Field>

      <Field>
        Участники:
        <StyledInput
          type="number"
          value={participants}
          onChange={(e) => setParticipants(Number(e.target.value))}
        />
      </Field>

      <Field>
        Описание:
        <StyledTextarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Field>

      <ValuesBox>
        <ValuesTitle>Текущие значения</ValuesTitle>
        <p>Название: {title ?? '(пусто)'}</p>
        <p>Формат: {format}</p>
        <p>Участники: {participants}</p>
        <p>Описание: {description || '(пусто)'}</p>
      </ValuesBox>
    </FormContainer>
  );
}
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styled from '@emotion/styled';

type Theme = 'light' | 'dark';

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

const ButtonsRow = styled.div`
  display: flex;
  gap: 10px;
`;

const SubmitButton = styled.button`
  flex: 1;
  padding: 10px;
  background: #deb557;
  color: #222;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #c9a045; }
`;

const GhostButton = styled(SubmitButton)`
  background: transparent;
  color: #deb557;
  border: 1px solid #deb557;
  &:hover { background: #2a2a2a; }
`;

const PreviewBox = styled.div`
  padding: 12px;
  border: 1px solid #555;
  border-radius: 8px;
  color: #e8e8e8;
`;

const PreviewTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 0.9rem;
  color: #deb557;
`;

export function ProfileSettings() {
  const [displayName, setDisplayName] = useState<string | undefined>(undefined);
  const [theme, setTheme] = useState<Theme>('light');
  const [fontSize, setFontSize] = useState<number>(16);
  const [description, setDescription] = useState<string>('');
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(true);

  function handleDescriptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function togglePreview() {
    setIsPreviewVisible((prev) => !prev);
  }

  function resetSettings() {
    setDisplayName(undefined);
    setTheme('light');
    setFontSize(16);
    setDescription('');
    setIsPreviewVisible(true);
  }

  return (
    <FormContainer>
      <Title>Настройки профиля</Title>

      <Field>
        Имя:
        <StyledInput
          value={displayName ?? ''}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </Field>

      <Field>
        Тема:
        <StyledSelect
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
        >
          <option value="light">Светлая</option>
          <option value="dark">Тёмная</option>
        </StyledSelect>
      </Field>

      <Field>
        Размер текста:
        <StyledInput
          type="range"
          min={12}
          max={30}
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
      </Field>

      <Field>
        Описание:
        <StyledTextarea
          value={description}
          onChange={handleDescriptionChange}
        />
      </Field>

      <ButtonsRow>
        <SubmitButton onClick={togglePreview}>
          {isPreviewVisible ? 'Скрыть просмотр' : 'Показать просмотр'}
        </SubmitButton>
        <GhostButton onClick={resetSettings}>Сбросить настройки</GhostButton>
      </ButtonsRow>

      {isPreviewVisible && (
        <PreviewBox>
          <PreviewTitle>Предварительный просмотр</PreviewTitle>
          <p>Имя: {displayName ?? 'Имя не указано'}</p>
          <p>Тема: {theme}</p>
          <p style={{ fontSize: fontSize }}>
            {description || 'Описание не добавлено'}
          </p>
        </PreviewBox>
      )}
    </FormContainer>
  );
}
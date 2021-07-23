import React, { FC } from 'react';
import { NavigateOptions } from '@reach/router';

type LangProps = {
  languages: string[];
  changeLanguage: (
    language: string,
    to?: string | undefined,
    options?: NavigateOptions<Record<string, unknown>> | undefined
  ) => Promise<void>;
};

export const LangList: FC<LangProps> = ({ languages, changeLanguage }) => (
  <ul>
    {languages.map((lng, i) => (
      <li key={i}>
        <button
          onClick={(e) => {
            e.preventDefault();
            changeLanguage(lng);
          }}
        >
          {lng}
        </button>
      </li>
    ))}
  </ul>
);

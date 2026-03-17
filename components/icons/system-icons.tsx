type IconProps = {
  className?: string;
};

export function SettingsSuggestIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        <path d="M4 7h9" />
        <path d="M4 12h5" />
        <path d="M4 17h9" />
        <circle cx="15" cy="7" r="2.2" />
        <circle cx="11" cy="12" r="2.2" />
        <circle cx="15" cy="17" r="2.2" />
        <path d="M19 4v2" />
        <path d="M18 5h2" />
      </g>
    </svg>
  );
}

export function ArrowRightAltIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h12m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function LightbulbIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        <path d="M9 18h6" />
        <path d="M10 21h4" />
        <path d="M12 3a6 6 0 0 0-3.8 10.6c.9.8 1.4 1.6 1.7 2.4h4.2c.3-.8.8-1.6 1.7-2.4A6 6 0 0 0 12 3Z" />
      </g>
    </svg>
  );
}

export function CodeIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m8 8-4 4 4 4m8-8 4 4-4 4m-5 4 2-16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function RocketLaunchIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        <path d="M14 4c3.5.4 5.6 2.5 6 6-2.2 2.3-5.7 5.8-8 8l-4-4c2.2-2.3 5.7-5.8 8-8Z" />
        <path d="M9 15 4 20" />
        <path d="M8 8 4 12" />
        <circle cx="15.5" cy="8.5" r="1.2" />
      </g>
    </svg>
  );
}

export function SendIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 11.5 20.5 4 15 20l-4.2-5.1L3 11.5Zm7.8 3.4 4.2-4.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
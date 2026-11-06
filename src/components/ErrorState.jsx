export default function ErrorState({
  title = "Something went wrong",
  message,
  onRetry,
}) {
  return (
    <div
      role="alert"
      className="rounded-lg border border-red-200 bg-red-50 p-6 text-center"
    >
      <p className="font-medium text-red-800">{title}</p>
      {message && <p className="mt-1 text-sm text-red-700">{message}</p>}
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Try again
        </button>
      )}
    </div>
  );
}

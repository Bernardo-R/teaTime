import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";

export default function Alert({ type, message }) {
  const alertClass = type === "success" ? "bg-green-50" : "bg-red-50";
  const iconClass = type === "success" ? "text-green-400" : "text-red-400";

  return (
    <div className={`rounded-md p-4 ${alertClass}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {type === "success" ? (
            <CheckCircleIcon
              className={`h-5 w-5 ${iconClass}`}
              aria-hidden="true"
            />
          ) : (
            <XMarkIcon className={`h-5 w-5 ${iconClass}`} aria-hidden="true" />
          )}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={`inline-flex rounded-md p-1.5 ${iconClass} hover:bg-${type}-100 focus:outline-none focus:ring-2 focus:ring-${type}-600 focus:ring-offset-2 focus:ring-offset-${type}-50`}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

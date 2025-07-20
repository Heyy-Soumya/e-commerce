import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from '@headlessui/react';
import { removeToast } from '../../features/ui/uiSlice';

const ToastContainer = () => {
  const dispatch = useDispatch();
  const toasts = useSelector((state) => state.ui.toastQueue);

  // auto-dismiss after 4 s
  useEffect(() => {
    toasts.forEach((t) => {
      const timer = setTimeout(() => dispatch(removeToast(t.id)), 4000);
      return () => clearTimeout(timer);
    });
  }, [toasts, dispatch]);

  return (
    <div className="fixed top-5 right-5 z-50 space-y-2">
      {toasts.map((t) => (
        <Transition
          key={t.id}
          show={true}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`px-4 py-2 rounded-md shadow-lg text-sm font-medium
              ${
                t.type === 'success'
                  ? 'bg-success text-white'
                  : t.type === 'error'
                  ? 'bg-danger text-white'
                  : 'bg-primary text-white'
              }`}
          >
            {t.message}
            <button
              onClick={() => dispatch(removeToast(t.id))}
              className="ml-3 font-bold"
            >
              ×
            </button>
          </div>
        </Transition>
      ))}
    </div>
  );
};

export default ToastContainer;
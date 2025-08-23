"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { searchCategories } from "@/lib/data/forum-categories";

const calculateSimilarity = (str1: string, str2: string): number => {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;

  if (longer.length === 0) return 1.0;

  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
};

const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + substitutionCost
      );
    }
  }

  return matrix[str2.length][str1.length];
};

interface AddDiscussionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    title: string;
    category: string;
    details: string;
  }) => void;
}

interface ModalForm {
  title: string;
  category: string;
  details: string;
}

interface ModalErrors {
  title: string;
  category: string;
  details: string;
}

export default function AddDiscussionModal({
  isOpen,
  onClose,
  onSubmit,
}: AddDiscussionModalProps) {
  const [modalForm, setModalForm] = useState<ModalForm>({
    title: "",
    category: "",
    details: "",
  });
  const [modalErrors, setModalErrors] = useState<ModalErrors>({
    title: "",
    category: "",
    details: "",
  });
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const filteredCategories = useMemo(() => {
    const searchTerm = modalForm.category.toLowerCase().trim();

    if (!searchTerm) {
      return searchCategories("").slice(0, 10);
    }

    const allCategories = searchCategories("");

    return allCategories
      .filter((category) => {
        const categoryLower = category.toLowerCase();

        if (categoryLower === searchTerm) return true;

        if (categoryLower.startsWith(searchTerm)) return true;

        if (categoryLower.includes(searchTerm)) return true;

        const words = categoryLower.split(/\s+/);
        if (words.some((word) => word.startsWith(searchTerm))) return true;

        if (searchTerm.length > 2) {
          const similarity = calculateSimilarity(categoryLower, searchTerm);
          if (similarity > 0.6) return true;
        }

        return false;
      })
      .sort((a, b) => {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();

        if (aLower === searchTerm && bLower !== searchTerm) return -1;
        if (bLower === searchTerm && aLower !== searchTerm) return 1;

        if (aLower.startsWith(searchTerm) && !bLower.startsWith(searchTerm))
          return -1;
        if (bLower.startsWith(searchTerm) && !aLower.startsWith(searchTerm))
          return 1;

        return a.localeCompare(b);
      })
      .slice(0, 8);
  }, [modalForm.category]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setModalForm({ title: "", category: "", details: "" });
      setModalErrors({ title: "", category: "", details: "" });
      setIsCategoryDropdownOpen(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  const handleModalInputChange = (field: keyof ModalForm, value: string) => {
    setModalForm((prev) => ({ ...prev, [field]: value }));
    if (modalErrors[field]) {
      setModalErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const errors: ModalErrors = {
      title: modalForm.title.trim() ? "" : "Title is required",
      category: modalForm.category ? "" : "Category is required",
      details: "",
    };

    setModalErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmitDiscussion = () => {
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(modalForm);
      } else {
        console.log("Submitting discussion:", modalForm);
      }
      onClose();
    }
  };

  const handleCategorySelection = (category: string) => {
    handleModalInputChange("category", category);
    setIsCategoryDropdownOpen(false);
  };

  const handleCategorySearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && filteredCategories.length > 0) {
      e.preventDefault();
      handleCategorySelection(filteredCategories[0]);
    } else if (e.key === "Escape") {
      setIsCategoryDropdownOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsCategoryDropdownOpen(true);
    }
  };

  const handleCategorySearchChange = (value: string) => {
    if (value.trim() && !isCategoryDropdownOpen) {
      setIsCategoryDropdownOpen(true);
    } else if (!value.trim()) {
      setIsCategoryDropdownOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <style jsx global>{`
        .clean-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }
        .clean-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .clean-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .clean-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          border: none;
        }
        .clean-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .clean-scrollbar::-webkit-scrollbar-button,
        .clean-scrollbar::-webkit-scrollbar-button:single-button,
        .clean-scrollbar::-webkit-scrollbar-button:double-button,
        .clean-scrollbar::-webkit-scrollbar-button:horizontal,
        .clean-scrollbar::-webkit-scrollbar-button:vertical,
        .clean-scrollbar::-webkit-scrollbar-button:start,
        .clean-scrollbar::-webkit-scrollbar-button:end,
        .clean-scrollbar::-webkit-scrollbar-button:decrement,
        .clean-scrollbar::-webkit-scrollbar-button:increment {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
        }
        .clean-scrollbar::-webkit-scrollbar-corner {
          display: none !important;
          background: transparent !important;
        }
      `}</style>

      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.12, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-[2px]"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl bg-black rounded-lg shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto clean-scrollbar"
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-xl font-semibold text-white">
              Start a New Discussion
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-white"
              >
                Title <span className="text-red-400">*</span>
              </label>
              <input
                id="title"
                type="text"
                value={modalForm.title}
                onChange={(e) =>
                  handleModalInputChange("title", e.target.value)
                }
                placeholder="Give your discussion a title..."
                className={`w-full px-3 py-2 bg-transparent border rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                  modalErrors.title ? "border-red-500" : "border-gray-700"
                }`}
              />
              {modalErrors.title && (
                <p className="text-red-400 text-sm">{modalErrors.title}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-white"
              >
                Category <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="category"
                    type="text"
                    value={modalForm.category}
                    onChange={(e) => {
                      handleModalInputChange("category", e.target.value);
                      handleCategorySearchChange(e.target.value);
                    }}
                    onFocus={() => setIsCategoryDropdownOpen(true)}
                    onKeyDown={handleCategorySearchKeyDown}
                    placeholder="Type to search categories or enter custom category..."
                    className={`w-full pl-10 pr-3 py-2 bg-transparent border rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      modalErrors.category
                        ? "border-red-500"
                        : "border-gray-700"
                    }`}
                  />
                </div>

                {isCategoryDropdownOpen &&
                  modalForm.category.trim() &&
                  filteredCategories.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-48 overflow-y-auto clean-scrollbar">
                      <div className="px-3 py-2 border-b border-gray-700 text-xs text-gray-400">
                        Suggestions ({filteredCategories.length})
                      </div>

                      <div className="py-1">
                        {filteredCategories.map((category) => (
                          <button
                            key={category}
                            type="button"
                            onClick={() => handleCategorySelection(category)}
                            className="w-full px-3 py-2 text-left text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 flex items-center justify-between"
                          >
                            <span>{category}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
              {modalErrors.category && (
                <p className="text-red-400 text-sm">{modalErrors.category}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="details"
                className="block text-sm font-medium text-white"
              >
                Details
              </label>

              <textarea
                id="details"
                value={modalForm.details}
                onChange={(e) =>
                  handleModalInputChange("details", e.target.value)
                }
                placeholder="Describe your thoughts, ideas, or questions here..."
                rows={6}
                style={{
                  minHeight: "120px",
                  maxHeight: "200px",
                  height: "auto",
                  resize: "none",
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height =
                    Math.min(target.scrollHeight, 300) + "px";
                }}
                className={`w-full px-3 py-2 bg-black border rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent clean-scrollbar ${
                  modalErrors.details ? "border-red-500" : "border-gray-600"
                }`}
              />

              {modalErrors.details && (
                <p className="text-red-400 text-sm">{modalErrors.details}</p>
              )}
            </div>

            <div className="flex justify-end pt-4">
              <Button
                onClick={handleSubmitDiscussion}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 text-base font-semibold rounded-md"
              >
                Submit Discussion
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

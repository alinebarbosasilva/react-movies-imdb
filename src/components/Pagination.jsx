import React from "react";
import "./Pagination.css";

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
        Anterior
      </button>
      <span>{page} / {totalPages}</span>
      <button onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>
        Próximo
      </button>
    </div>
  );
};

export default Pagination;

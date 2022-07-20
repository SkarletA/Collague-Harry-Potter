import React from 'react';
import { deleteFavorite } from '../../api/requestFavorite';

export function ModalDelete({ openModalDelete, closeModalDelete, currentId }) {
  const onDeleteFavorite = async (id) => {
    await deleteFavorite(id);
  };

  if (!openModalDelete) return null;
  return (
    <section className={"modalDelete"}>
      <div className={"popupDelete"}>
        <p className={"titleDelete"}>Are you sure you want to delete this favorite character? </p>
        <div data-testid="btns" className={"btnsDelete"}>
          <button
            id="btnDelete"
            type="button"
            className={"btnDelete"}
            onClick={() => {
              onDeleteFavorite(currentId);
              closeModalDelete();
            }}
          >
            Delete
          </button>
          <button
            name="btn-cancel"
            id="cancel"
            type="button"
            className={"btnNoDelete"}
            onClick={closeModalDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
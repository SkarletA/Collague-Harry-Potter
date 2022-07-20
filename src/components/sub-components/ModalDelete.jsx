import React from 'react';
import { updateFavorite } from '../../api/requestCharacters';
import { deleteFavorite } from '../../api/requestFavorite';

export function ModalDelete({ openModalDelete, closeModalDelete, current, refresh, setRefresh }) {
  const currentId = current.id;
  const character = current.name;
  const onDeleteFavorite = async (id, data) => {
    await deleteFavorite(id);
    await updateFavorite(data, id);
    setRefresh(!refresh)
  };

  if (!openModalDelete) return null;
  return (
    <section className={"modalDelete"}>
      <div className={"popupDelete"}>
        <p className={"titleDelete"}>{`¿Seguro que quieres eliminar a ${character} de la lista de favorito? `}</p>
        <div data-testid="btns" className={"btnsDelete"}>
          <button
            id="btnDelete"
            type="button"
            className={"btnDelete"}
            onClick={() => {
              onDeleteFavorite(currentId, current);
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